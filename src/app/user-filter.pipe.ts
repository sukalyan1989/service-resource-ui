import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if(!items||!filter){
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.firstname.toLowerCase().indexOf(filter['title'].toLowerCase()) !== -1);
  }


}
