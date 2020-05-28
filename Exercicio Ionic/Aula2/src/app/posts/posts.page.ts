import { Component, OnInit } from '@angular/core';
import { ServAulaService } from '../serv-aula.service';}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  constructor(private ServAulaService: ServAulaService) { }

  ngOnInit(): void {
    this.arraypost = this.ServAulaService.getPosts();
  }
  arraypost = [];


}
