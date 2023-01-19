import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchKnowledgeBaseComponent } from './pages/search-knowledge-base/search-knowledge-base.component';
import { ViewKnowledgeBaseArticleComponent } from './pages/view-knowledge-base-article/view-knowledge-base-article.component';
import { ViewKnowledgeBaseSectionComponent } from './pages/view-knowledge-base-section/view-knowledge-base-section.component';

const routes: Routes = [
  { path: 'knowledge-base', component: HomeComponent },
  { path: 'knowledge-base/section/:id', component: ViewKnowledgeBaseSectionComponent },
  { path: 'knowledge-base/section/:sectionId/article/:articleId', component: ViewKnowledgeBaseArticleComponent },
  { path: 'knowledge-base/search', component: SearchKnowledgeBaseComponent },
  { path: '', redirectTo: 'knowledge-base', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
