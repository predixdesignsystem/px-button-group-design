/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-button-group-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-button-group-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-button-group-design" description="The Predix UI Button Group module is an implementation of button groups, either multiple or unique select." layer="objects" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-buttons-design&quot;,
    &quot;https://github.com/PredixDev/px-helpers-design&quot;
  ]" selected-options="{{selectedOptions}}" tabs="[&quot;Default&quot;]">

<!-- 2: Set Options -->

<px-sass-doc-option slot="options" option-name="Type" choose-with="dropdown" choices="[
    &quot;single select&quot;,
    &quot;multi select&quot;
  ]" default-choice="single select">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Disabled" choose-with="boolean" default-choice="false">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->

<section slot="demo-html">
<div class="btn-group">
  <input id="id1" name="btn-group" type="{{buttonGroupType}}">
  <label for="id1" class\$="{{buttonClass}}">Label 1</label>
  <input id="id2" name="btn-group" type="{{buttonGroupType}}">
  <label for="id2" class\$="{{buttonClass}}">Label 2</label>
</div>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
\`\`\`
<!-- Single Select -->
<div class="btn-group">
  <input id="id1" name="btn-group" type="radio">
  <label for="id1" class="btn">Label1</label>
  <input id="id2" name="btn-group" type="radio">
  <label for="id2" class="btn">Label2</label>
</div>


<!-- Multi Select -->
<div class="btn-group">
  <input id="id1" type="checkbox">
  <label for="id1" class="btn">Label1</label>
  <input id="id2" type="checkbox">
  <label for="id2" class="btn">Label2</label>
</div>


<!-- Disabled (can be combined with either single or multi-select) -->
<div class="btn-group">
  <input id="id1" type="checkbox disabled">
  <label for="id1" class="btn btn--disabled">Label1</label>
  <input id="id2" type="checkbox disabled">
  <label for="id2" class="btn btn--disabled">Label2</label>
</div>
\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-button-group-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated : function(evt) {
    this.importCode = this._importCode();
    this.buttonGroupType = this._buttonGroupType();
    this.buttonClass = this._buttonClass();
    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _buttonGroupType : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Type === "single select")  strings.push("radio");
    if (opts.Type === "multi select")   strings.push("checkbox");
    return strings.join(" ").trim();
  },

  _buttonClass : function() {
    var opts = this.selectedOptions || {}, strings = [];
    if (opts.Disabled === true)  strings.push("btn--disabled");
    return ("btn " + strings.join(" ")).trim();
  },

  _importCode : function() {
    return '@import "px-button-group-design/_objects.button-group.scss";';
  }
});
