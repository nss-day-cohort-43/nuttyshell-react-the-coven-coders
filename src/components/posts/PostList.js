import React from 'react'
import { Menu, Tab } from 'semantic-ui-react'
import { PublicPosts } from './PublicPosts'
import { PostForm } from './PostForm'

// This is the code for the tabs in the post section
const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Public' },
    render: () => <Tab.Pane><PublicPosts /><PostForm /></Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key='messages'>
        Secret Messages
      </Menu.Item>
    ),
    render: () => <Tab.Pane><h2>Private Messages</h2><p>Soon you will be able to chat privately with a member of your coven!</p></Tab.Pane>,
  },
]

export const PostList = () => <Tab panes={panes} />

