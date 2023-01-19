import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButterCMSService } from 'src/app/core/services/butter-cms.service';

@Component({
  selector: 'app-search-knowledge-base',
  templateUrl: './search-knowledge-base.component.html',
  styleUrls: ['./search-knowledge-base.component.scss']
})
export class SearchKnowledgeBaseComponent implements OnInit {
  id: string | any ;
  knowledgeBaseData: any;

  constructor(
    private route: ActivatedRoute,
    private butterCMSService: ButterCMSService
  ) {}

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((q) => {
    //   const status = q.get('status')
    // })

    this.route.queryParams
      .subscribe(params => {
        this.id = params['query'];
        console.log(params);
      }
    );

    this.butterCMSService.SearchKnowledgeBaseSection(this.id)
    .then((resp: any) => {
      this.knowledgeBaseData = resp?.data?.data;
      console.log('section data', resp?.data?.data)
    })
    .catch(function(error: any) {
      console.log('section error', error)
    });
  }
}
