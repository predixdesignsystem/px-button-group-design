# Button Group

Predix Experience Button Group module is an implementation of button groups, either multi or unique select.

## Demo

You can review toggle styles and recommended markup here: https://github.build.ge.com/pages/PXd/px-button-group-design

## Dependencies

Px's Button Group module depends on two other PXd modules:

* [px-buttons-design](https://github.build.ge.com/PXd/px-colors-design)
* [px-helpers-design](https://github.build.ge.com/PXd/px-helpers-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.build.ge.com/PXd/px-button-group-design.git

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-button-group-design/objects.button-group";

See [px-getting-started](https://github.build.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('objects.button-group') { ... }

## Usage

The following variables are available for use in the module:

    $inuit-btn-group-color
    $inuit-btn-group-background
    $inuit-btn-group-background--hover
    $inuit-btn-group-background--pressed
    $inuit-btn-group-border-color
    $inuit-btn-group-border-color--hover
    $inuit-btn-group-border-color--pressed
