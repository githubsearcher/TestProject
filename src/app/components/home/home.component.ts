    import { Component, OnInit } from '@angular/core';
    import { StorageService } from '../../services/localStorage.service';
    // import * as $ from 'jquery';
    declare var $: any;
    @Component({
      selector: 'app-home',
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent implements OnInit {
      currentUser: any;
      messageVal: any;
      updateMessage: any;
      storeData: any = [];
      unLike: any = false;
      unLikereply: any = false;
      replyToComment: any = false;
      replyMsg: any;
      storeRepliedData: any = [];
      updateReplyMessage: any;
      constructor(private _storage: StorageService) { }

      ngOnInit() {
        this.currentUser =  JSON.parse(localStorage.getItem('loginUser'));
      }

      sendMessage(msg, status) {
         if (msg !== '') {
          if (status === 'create' || status === 'update') {
            this.storeData = [];
            this.currentUser['message'] = msg;
            this.currentUser['messageToreply'] = msg;
            this.storeData.push(this.currentUser);
            this.messageVal = '';
            this.updateMessage = '';
            $('#myModal').modal('hide');
            $('.modal-backdrop').remove();
          }
          if (status === 'reply') {
              this.storeRepliedData = [];
              this.currentUser['messageToreply'] = msg;
              this.storeRepliedData.push(this.currentUser);
              this.replyMsg = '';
          }
          msg = '';
        }
      }

      // like comment
      like(i) {
        this.unLike = true;
      }

      // unlike comment
      unlike(i) {
        this.unLike = false;
      }

      // delete Comment
      deleteComment(i) {
        this.storeData.splice(i, 1);
      }

      // delete replied comment
      deleteReplyComment(i) {
        this.storeRepliedData.splice(i, 1);
        this.replyToComment = false;
      }

      // edit comment
      editComment(data) {
         this.updateMessage = data.message;
      }

      // edit replied comment
      editReplyComment(data) {
          this.updateMessage = data.messageToreply;
      }

      // reply to comment
      reply(event, i) {
          this.replyToComment = true;
      }

      // like replied comment
      likeReply(i) {
           this.unLikereply = true;
      }

      // unlike replied comment
      unlikeReply() {
        this.unLikereply = false;
      }

    }
