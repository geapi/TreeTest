// ==========================================================================
// Project:   TreeTest.fileController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TreeTest */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
TreeTest.fileController = SC.ObjectController.create(
/** @scope TreeTest.fileController.prototype */ {

  contentBinding: SC.Binding.from('TreeTest.filesController.selection').single()
}) ;
