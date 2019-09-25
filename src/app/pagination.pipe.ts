import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  
  transform(items: any[], params?: params): any[] {
    
    if(!items){
      return items;
    }
    //dryout protection
    if(params.from<=0){
      return items.slice(0,params.itemPerPage)
    }

    //overflow protection
    if(params.to>=items.length){
      return items.slice(params.from,params.to)
    }
    return items.slice(params.from,params.to)
    
  }

}
export interface params{
  from:number,
  to:number,
  itemPerPage:number
}