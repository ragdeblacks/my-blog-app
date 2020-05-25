import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faInfo,
  faBriefcase,
  faAt,
  faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userIcon = faUser;
  userInfo = faInfo;
  useBrief = faBriefcase;
  useComment = faComment;
  useAt = faAt;
  constructor() { }

  ngOnInit(): void {
  }

}
