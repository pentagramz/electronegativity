import { sourceTypes } from "../../parser/types";

export default class ExperimentalFeaturesHTMLCheck {
  constructor() {
    this.id = 'EXPERIMENTAL_FEATURES_HTML_CHECK';
    this.short = '';
    this.description = ``;
    this.type = sourceTypes.HTML;
  }

  match(data) {
    const loc = [];
    const webviews = data('webview');
    webviews.each(function (i, elem) {
      let wp = data(this).attr('webpreferences');
      if(wp && (wp.indexOf('experimentalFeatures=true') != -1 || wp.indexOf('experimentalCanvasFeatures=true') != -1)){
        loc.push({ line: 1, column: 1 });
      }

    });
    return loc;
  }
}