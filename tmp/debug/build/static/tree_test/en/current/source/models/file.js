// ==========================================================================
// Project:   TreeTest.File
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TreeTest */

/** @class

(Document your Model here)

@extends SC.Record
@version 0.1
*/
TreeTest.File = SC.Record.extend(
/** @scope TreeTest.File.prototype */ {

	treeItemIsExpanded: NO,
	name: SC.Record.attr(String, { defaultValue: 'untitled file', isRequired: YES }),
	guid: SC.Record.attr(String, { isRequired: YES }),
	isDirectory: SC.Record.attr(Boolean),
	date: SC.Record.attr(String),	
	size: SC.Record.attr(Number),
	//parentDirectory: function() {
		//   if(SC.none(this.get('_id'))) return null;
		//
		//   // Create the query if necessary.
		//     var query = SC.Query.local(TreeTest.File, "parentDirectory=%@".fmt(this.get('primaryKey')));
		//
		//
		//   // Execute the query and return the results.
		//   return this.get('store').find(query);
		// }.property('primaryKey').cacheable(),
		parentDirectory: SC.Record.toOne('TreeTest.File', { inverse: 'files' }),
		files: 	function() {
			if(SC.none(this.get('_id'))) return null;

			// Create the query if necessary.
			var query = SC.Query.local(TreeTest.File, "parentDirectory=%@".fmt(this.get('primaryKey')));


			// Execute the query and return the results.
			return this.get('store').find(query);
		}.property('primaryKey').cacheable(),

		_FILENAME_WITHOUT_EXT_RE: /^(.*)\..*$/,

		description: function() {
			var name = this.get('name'),
			width = this.get('width') || '??',
			height = this.get('height') || '??';

			name = name ? name.replace(this._FILENAME_WITHOUT_EXT_RE, '$1') : 'Loading...';

			return "%@ (%@x%@)".fmt(name, width, height);
		}.property('name', 'width', 'height').cacheable(),
		icon: function() {
			var isTrash = this.get('name') === '_Trash'.loc();
			return isTrash ? 'sc-icon-trash-16': 'sc-icon-folder-16';
		}.property('name'),

		treeItemChildren: function() {
			return this.get('files');
		}.property('files').cacheable(),

		isTrash: function() {
			return this.get('guid') === 'Trash';
		}.property('guid').cacheable(),

		hasFiles: function() {
			var files = this.get('files');
			return files && files.get('length') > 0;
		}.property('files').cacheable()


	}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tree_test');