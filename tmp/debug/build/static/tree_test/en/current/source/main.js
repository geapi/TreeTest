// ==========================================================================
// Project:   TreeTest
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TreeTest */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
TreeTest.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  TreeTest.getPath('mainPage.mainPane').append() ;

  // Step 2. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: TreeTest.contactsController.set('content',TreeTest.contacts);
	TreeTest.store.from(SC.Record.fixtures);
	var files = TreeTest.store.find(TreeTest.File, "/");//.get('treeItemChildren');
	TreeTest.filesController.set('content', files.get('treeItemChildren'));

} ;

function main() { TreeTest.main(); }
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tree_test');