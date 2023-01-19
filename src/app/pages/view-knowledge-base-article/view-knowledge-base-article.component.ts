import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButterCMSService } from 'src/app/core/services/butter-cms.service';

@Component({
  selector: 'app-view-knowledge-base-article',
  templateUrl: './view-knowledge-base-article.component.html',
  styleUrls: ['./view-knowledge-base-article.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewKnowledgeBaseArticleComponent implements OnInit {

  id: string | any ;
  articleData: any;
  sectionId: string | any;

  constructor(
    private route: ActivatedRoute,
    private butterCMSService: ButterCMSService
  ) {}

  ngOnInit(): void {
    this.sectionId = this.route.snapshot.paramMap.get('sectionId');
    this.id = this.route.snapshot.paramMap.get('articleId');
    console.log('id', this.id);
    
    this.butterCMSService.getKnowledgeBaseArticleType(this.id)
    .then((resp: any) => {
      this.articleData = resp?.data?.data;
      console.log('article data', resp?.data?.data)
    })
    .catch(function(error: any) {
      console.log('article error', error)
    });
  }

}
