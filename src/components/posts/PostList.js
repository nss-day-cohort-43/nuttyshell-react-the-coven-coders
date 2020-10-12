// Similar to AnimalList 
import React from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'
import { PublicPosts } from './PublicPosts'


const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <Tab.Pane><PublicPosts/></Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key='messages'>
        Messages<Label>15</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Chase fathom topgallant chandler tender cable take a caulk Spanish Main American Main scurvy.
    Jack Tar jury mast chandler Privateer grog blossom sloop topmast parley doubloon fire ship. 
    List driver lugsail interloper hornswaggle crow's nest pressgang lanyard jib squiffy.
    Clipper black jack bowsprit grog blossom pink bilge water bilge rat Jack Tar fire in the hole bilged on her anchor. 
    Schooner heave to grog clipper barque Shiver me timbers gangplank Brethren of the Coast cog no prey, no pay. 
    Lookout rope's end lanyard dance the hempen jig crow's nest parley Buccaneer Nelsons folly tack chase.</Tab.Pane>,
  },
]

export const PostList = () => <Tab panes={panes} />

