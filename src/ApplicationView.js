import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { HeaderWelcome } from "./components/header/HeaderWelcome"
import { PostProvider } from './components/posts/PostProvider'
import { TasksProvider } from './components/tasks/TasksProvider'
import { TaskList } from './components/tasks/TaskList'
import { EventProvider } from './components/events/EventProvider'
import { EventList } from './components/events/EventList'
import { PostList } from './components/posts/PostList'
import { FriendsProvider } from './components/friends/FriendsProvider'
import { FriendsList } from './components/friends/FriendsList'
import { NewsList } from './components/news/NewsList'
import { NewsProvider } from './components/news/NewsProvider'
import { UseLogo } from "./components/logo/UseLogo"
import './NutShell.css'


export const GridLayout = () => {
  
    return (
        <Grid className="container">
            <Grid.Row rows={1}>
                <GridColumn className="header-container">
                    <UseLogo />
                    <HeaderWelcome />
                </GridColumn>
            </Grid.Row>
            <Grid.Row columns={3} className="row1">
            <Grid.Column className="row1-column1">
                <TasksProvider>
                    <TaskList />
                </TasksProvider>
            </Grid.Column >
            <Grid.Column className="row1-column2">
                <EventProvider>
                    <EventList/>
                </EventProvider>
            </Grid.Column>
            <Grid.Column className="row1-column3">
                <NewsProvider>
                    <NewsList />
                </NewsProvider>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className="row2">
            <Grid.Column className="row2-column1">
                <PostProvider>
                    <PostList/>
                </PostProvider>
            </Grid.Column>
            <Grid.Column className="row2-column2">
                <FriendsProvider>
                    <FriendsList />
                </FriendsProvider>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}