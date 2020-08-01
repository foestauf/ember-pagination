import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";


interface ArticleArgs {}

export default class Article extends Component<ArticleArgs> {
                 @tracked isShowingModal = false;
                 @action
                 toggleModal() {
                   this.isShowingModal = !this.isShowingModal;
                 }
               }
