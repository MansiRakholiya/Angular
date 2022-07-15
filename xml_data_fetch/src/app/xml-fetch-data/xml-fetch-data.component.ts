import { Component, OnInit } from '@angular/core';
import { js2xml, xml2js } from 'xml-js';
import * as converter from 'xml-js';
import * as XLSX from 'ts-xlsx';

@Component({
  selector: 'app-xml-fetch-data',
  templateUrl: './xml-fetch-data.component.html',
  styleUrls: ['./xml-fetch-data.component.css']
})
export class XmlFetchDataComponent implements OnInit {
  list: any= [];

  constructor() { }

  ngOnInit(): void {
  }
  
  getFilename(name:any) {
    return name.substring(0, name.lastIndexOf('.'));
  }
  getFileExtension(filename:any) {
    return (filename != '' && filename != undefined && filename != null) ? filename.split('.').pop() : '';
  }
  selectfile(event:any) {
    debugger;
    const file: File = event.target.files[0];
    console.log(file)
     if (this.getFileExtension(file.name) != 'xml') {
      alert("Wrong XML");
       return;
     }
    
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e: any) => {
      alert('inside onload');
      debugger;
      let xml = e.target.result;
      let result1 = converter.xml2json(xml, { compact: true, spaces: 2});
      console.log(xml)
      console.log(result1)
      let JSONData:any = JSON.parse(result1);
      console.log(JSONData);
      // const identifier = JSONData.modules.module.items.item.content_type._text;
      // console.log(identifier);
      this.list = [];
      if(Array. isArray(JSONData.modules.module))
      {
        for(let i of JSONData.modules.module)
        {
          // debugger;
          //   let k=0;
          // for(var i = 0;i<arr.length;i++) {   
          //  console.log(arr[i]);  
          

          //   let f = 0;
          //   for(let l of JSONData.modules.module[k].items.item[f].identifierref._text)
          //   {
          //     console.log(JSONData.modules.module[k].items.item[f].identifierref._text);
          //     f++;
          //   }
           
          //   k++;
            
          // }
          // console.log(i);
          // console.log(JSONData.modules.module[i].items.item[j].identifierref._text)
          
          // let tempdata:any={
          //   identifier:i.identifierref._text,  
            // mobile:i.mobile._text,
            // name:i.name._text
          // }
          // this.list.push(tempdata);
          // console.log(this.list);
        } 
      } 
    }
  }
}
