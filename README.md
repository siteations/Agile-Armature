# Agile-Armature

**A wireframing application that allows users to design layouts for websites and outputs corresponding html and css.**

[**PROJECT DEMO**](http://www.agile-armature.com/)

## Team members

**David** - 

**Mack** - 

**Meg** - www.siteations.com www.github.com/siteations

**Ray** - 





# Front End Overview

## [Redux Reducers & React Components](https://github.com/thenorthstarblues/Agile-Armature/tree/master/src)

### [Boxes](https://github.com/thenorthstarblues/Agile-Armature/blob/master/src/reducers/boxes.js)
  This reducer's state is a hierarchal representation of the boxes being dragged in the UI. 
#### [Action creators](https://github.com/thenorthstarblues/Agile-Armature/blob/master/src/constants_actioncreators/boxes.js):
  * **addBox(id, tag)**: Given an id and html tag, this action creator creates a new instance of a box and adds it to our Boxes state. It is rendered on the default spawn location.   
  * **setBox(box)**: Given an instance of a box, this action creator updates the box instance through its id in the Boxes state. 
  * **removeBox(id)**: Given a boxes Id, this action creator deletes that box instance from the Boxes state. 
  * **setParent(parentId, childId)**: Given a childId and parentId, this action creator updates the box instance with that childId, changing the parent property to the parentId passed in. 
  * **addChild(parentId, childId)**: Given a childId and parentId, this action creator updates the box instance with that parentId, adding the childId to its children property array. 
  * **removeParent(childId)**: Given a childId this action creator sets the parent property to null.
  * **removeChild(parentId, childId)**: Given a childId and parentId, this action creator updates the box instance with that parentId, removing the childId from the children property. 
  * **clearAll()**: resets the Boxes state to its initial state. 

#### Components:

* [Grid](https://github.com/thenorthstarblues/Agile-Armature/blob/master/src/components/Grid.js) : description to come
* [Window](https://github.com/thenorthstarblues/Agile-Armature/blob/master/src/components/DrawHere.js) : description to come
* [DrawHere](https://github.com/thenorthstarblues/Agile-Armature/blob/master/src/components/DrawHere.js) : description to come



### [Pages](https://github.com/thenorthstarblues/Agile-Armature/blob/master/src/reducers/addPageReducer.js)

#### Action Creators:

**[Layouts](https://github.com/thenorthstarblues/Agile-Armature/blob/master/src/constants_actioncreators/layout.js)**
* **loadLayout(id)**: Given the id of a group, this action creator makes an asyncronous call to the database to pull that layout's data and loads it to the Boxes state. Dispatches setCurrent when completed. 
* **saveLayout(stateCopy)**: Given a copy of the current state, this action creator makes a call to the database to create a new instance of a layout in the database and then creates instances of the cooresponding elements. dispatches loadLayout when completed. 
* **saveGroup(name, currentId, elements)**: Given a name, id of the current layout, and copy of the state copy, this action creator creates a new instance of a group in our database, getting the id. If a layout has not been saved it will also create a new layout in the database setting up the relationship to the group. If the current layout has already been saved it will update the relationship to the group in the database. 
* **addToGroup(stateCopy, groupId, base)**: Given a copy of the Boxes state, the groupId this will create a layout that is a copy of the current Boxes state and associate it with the group by id. A boolean is passed in to determine if the state's current Id needs to be changed. 

**[Groups](https://github.com/thenorthstarblues/Agile-Armature/blob/master/src/constants_actioncreators/groups.js)**
* **makeGroup(group)**: Given a groupId, this Action Creator will set the current group id to the that id.  
* **addPage(page)**: Given a page id, this Action Creator will concatenate the pageId to the state's array of pages.
* **setCurrent(id)**: Given a layoutId this action creator will set the currentLayout to that id. 
* **setGroups(groups)**: Given an array of group ids, this action creator will update the groups array in the pages state to that array.
* **setPages(pages)**: Given an array of pages it 
* **holdPages(pageLayouts)**: Minified versions of the svgs of the layout.
* **getTemplates()**: This action creator makes an axios request to the database to get all the groups' ids. When they are loaded it dispatches setGroups with that array of ids. 
* **getLayouts(id)**: Given a group id this action creator makes an axios request to the database to get all the layouts' ids associated with that group. When loaded it dispatches setPages. 
* **updatePage(id,stateCopy)**: Given a layout and stateCopy this action creator will make an axios request to the database to update the layout with that id. 
* **saveOrUpdate(stateCopy, id)**: Given a copy of the state and layout id function determines whether to update or create a new layout.
* **pageChange(stateCopy,id,pageNo)**: This is a specific action creator for when a user changes pages when viewing multiple layouts. 

### HTML

### Boxes CSS

###

###


Under Construction! 

Demo Available @ http://www.agile-armature.com/
