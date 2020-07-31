import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { alias, oneWay } from "@ember/object/computed";
import pagedArray from "ember-cli-pagination/computed/paged-array";
import { inject } from '@ember/controller'


export default class ArticlesComponent extends Component {
    // setup our query params
    queryParams = ["page", "perPage"];

    // set default values, can cause problems if left out
    // if value matches default, it won't display in the URL
    @tracked page = 1;
    @tracked perPage = 10;

    // can be called anything, I've called it pagedContent
    // remember to iterate over pagedContent in your template
    @pagedArray('args.posts', {
        page: alias("parent.page"),
        perPage: alias("parent.perPage"),
    })
    pagedContent;

    // binding the property on the paged array
    // to a property on the controller
    @oneWay("pagedContent.totalPages") totalPages;
}