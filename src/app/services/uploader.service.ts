import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {
  private apiUrl:string = "YOUR_URL_HERE";
  private base64textString:String="";
  fileName: any;

  constructor(private http:HttpClient) { }
  uploadFile(file) {
        if (file && file.size<=991128) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded.bind(this);
          reader.readAsBinaryString(file);
          this.fileName = file.name;
        }else{
          alert("Please select valid file");
        }
    }
    _handleReaderLoaded(readerEvt) {
       var binaryString = readerEvt.target.result;
              this.base64textString= btoa(binaryString);
              this.postData();
      }
      postData(){
        let headers: HttpHeaders = new HttpHeaders();
        headers.append("Content-Type","application/json");
        let body = {
            "file":this.base64textString,
            "fileName":this.fileName
        }
        this.http.post(this.apiUrl,body,{'headers':headers}).subscribe((data)=>{
          alert(JSON.stringify(data));
        });
      }
}
