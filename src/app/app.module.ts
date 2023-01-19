import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewKnowledgeBaseSectionComponent } from './pages/view-knowledge-base-section/view-knowledge-base-section.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderForSectionsComponent } from './components/header-for-sections/header-for-sections.component';
import { ViewKnowledgeBaseArticleComponent } from './pages/view-knowledge-base-article/view-knowledge-base-article.component';
import { SearchKnowledgeBaseComponent } from './pages/search-knowledge-base/search-knowledge-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewKnowledgeBaseSectionComponent,
    HomeComponent,
    HeaderForSectionsComponent,
    ViewKnowledgeBaseArticleComponent,
    SearchKnowledgeBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
