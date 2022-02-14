import { HttpClient } from "@angular/common/http";
import { PipeTransform, Pipe } from "@angular/core";
import { catchError, map,of } from "rxjs";


@Pipe({ name: "image" })
export class ImagePipe implements PipeTransform {
  defaultImage: string = "assets/lady.jpg";
  constructor(private http: HttpClient) {}

  transform(url: string): any {
    return this.http
      .get(url).pipe(
          map((res : any)=> {
            //return url if valid
            return url;
          }),
          catchError((error: any) => {
            return of(() => {
              //return default image if url not valid
              return this.defaultImage;
            });
          })
      )
    
  }
}
