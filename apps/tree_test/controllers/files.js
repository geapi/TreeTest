// ==========================================================================
// Project:   TreeTest.filesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TreeTest */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
TreeTest.filesController = SC.TreeController.create(
	SC.CollectionViewDelegate,
/** @scope TreeTest.filesController.prototype */ {
	treeItemIsGrouped: YES,
	content: null,
	sortBy :'name',
    delete:function(){
	
	var record = this.getPath('selection.firstObject')
	console.log("deleting ...");
	console.log("is deleted before: "+ record.isDestroyed());
	 this.getPath('selection.firstObject').destroy();
	TreeTest.store.commitRecords();
	console.log("is deleted after: "+ record.isDestroyed());
	this.deleteSelection();
	
   },
	collectionViewDeleteContent: function(view, content, indexes) {

       // destroy the records
	  SC.Logger.log("collection view delete content");
	  sc_super();
      // var records = indexes.map(function(idx) {
      //     return this.objectAt(idx);
      // },
      // this);
      // records.invoke('destroy');
      //
      // var selIndex = indexes.get('min') - 1;
      // if (selIndex < 0) selIndex = 0;
      // this.selectObject(this.objectAt(selIndex));
   },
	deleteSelection: function(){
		console.log("in delete selection");
	 sc_super();
}

}) ;
