import { Routes } from '@angular/router';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoDescricaoComponent } from './produto-descricao/produto-descricao.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'produto', component: ProdutoComponent},
    { path: 'sobre', component: SobreNosComponent},
    { path: 'detalhe/:id', component: ProdutoDescricaoComponent},
];
