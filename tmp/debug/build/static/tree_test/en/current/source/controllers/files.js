// ==========================================================================
// Project:   TreeTest.filesController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TreeTest */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
TreeTest.filesController = SC.ArrayController.create(
/** @scope TreeTest.filesController.prototype */ {

  // TODO: Add your own code here.
   delete:function(){
	
	var record = this.getPath('selection.firstObject')
	console.log("deleting ...");
	console.log("before: "+ record.isDestroyed());
	 this.getPath('selection.firstObject').destroy();
	TreeTest.store.commitRecords();
	console.log("after: "+ record.isDestroyed());
   }

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tree_test');