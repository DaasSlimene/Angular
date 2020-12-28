import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { BookpanierComponent } from './bookpanier/bookpanier.component';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavuserComponent } from './navuser/navuser.component';
import { SearchComponent } from './search/search.component';
import { TotalComponent } from './total/total.component';

const routes: Routes = [
  { path: 'dashboard' , component : NavbarComponent ,children:[
    {path:'books',component:BooksComponent},   
    {
      path : 'search' , component : SearchComponent
    },{
      path: 'edit/:id',
      component: EditBookComponent
     },
  
    {path: 'add/create',
  component: AddbookComponent
 }]},
 
 {path:'bookstore', component: NavuserComponent,
  children : [{
    path: 'total',
    component: TotalComponent
 },{
    path: 'list',
    component: ListbooksComponent
 }, {
  path:'Books/panier',
  component: BookpanierComponent
 }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
