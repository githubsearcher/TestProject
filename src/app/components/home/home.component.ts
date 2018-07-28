    import { Component, OnInit } from '@angular/core';
    import { StorageService } from '../../services/localStorage.service';
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
      dataValue: any;
      storeReply: any;
      constructor(private _storage: StorageService) { }

      ngOnInit() {
        this.currentUser =  JSON.parse(localStorage.getItem('loginUser'));
        this.dataValue= JSON.parse(localStorage.getItem('storeData'));
        if(this.dataValue && this.dataValue.length > 0) {
        this.storeData  = this.dataValue;
        }
        this.storeReply = JSON.parse(localStorage.getItem('storeRepliedData'));
        if(this.storeReply && this.storeReply.length > 0) {
        this.storeRepliedData = this.storeReply;
        }
      }

      sendMessage(msg, status) {
         if (msg !== '') {
          if (status === 'create') {
            // this.storeData = [];
            this.currentUser['message'] = msg;
            this.storeData.push(this.currentUser);
            this.messageVal = '';
          }
          if(status === 'update') {
            this.currentUser['message'] = msg;
            this.updateMessage = '';
            $('#myModal').modal('hide');
            $('.modal-backdrop').remove();
          }

           if(status === 'updateToReply') {
            this.currentUser['messageToreply'] = msg;
            this.updateMessage = '';
            $('#myModal2').modal('hide');
            $('.modal-backdrop').remove();
          }

          if (status === 'reply') {
             // this.storeRepliedData = [];
              this.currentUser['messageToreply'] = msg;
              this.storeRepliedData.push(this.currentUser);
              this.replyMsg = '';
          }
          msg = '';
        }
         this._storage.setItem('storeData', JSON.stringify(this.storeData));
         this._storage.setItem('storeRepliedData', JSON.stringify(this.storeRepliedData));
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
        if(i == this.currentUser.id) {
        this.storeData.splice(i, 1);
        this._storage.setItem('storeData', JSON.stringify(this.storeData));
        }
      }

      // delete replied comment
      deleteReplyComment(i) {
         if(i == this.currentUser.id) {
        this.storeRepliedData.splice(i, 1);
        this.replyToComment = false;
        this._storage.setItem('storeData', JSON.stringify(this.storeRepliedData));
       }
      }

      // edit comment
      editComment(data) {
        if(data.id == this.currentUser.id) {
         this.updateMessage = data.message;
       }
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
