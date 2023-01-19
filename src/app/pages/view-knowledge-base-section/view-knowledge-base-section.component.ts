import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ButterCMSService } from 'src/app/core/services/butter-cms.service';

@Component({
  selector: 'app-view-knowledge-base-section',
  templateUrl: './view-knowledge-base-section.component.html',
  styleUrls: ['./view-knowledge-base-section.component.scss'],
})
export class ViewKnowledgeBaseSectionComponent implements OnInit {

  id: string | any ;
  sectionData: any;

  constructor(
    private route: ActivatedRoute,
    private butterCMSService: ButterCMSService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log('id', this.id);
    
    // this.route.paramMap.subscribe((params: ParamMap | any ) => {
    //   this.id = +params.get('id')
    // })

    this.butterCMSService.getKnowledgeBaseSectionType(this.id)
    .then((resp: any) => {
      this.sectionData = resp?.data?.data;
      console.log('section data', resp?.data?.data)
    })
    .catch(function(error: any) {
      console.log('section error', error)
    });
  }


}
