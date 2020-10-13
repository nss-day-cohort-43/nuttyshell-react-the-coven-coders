import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { HeaderWelcome } from "./components/header/HeaderWelcome"
import { PostProvider } from './components/posts/PostProvider'
import { PostList } from './components/posts/PostList'
import { UseLogo } from "./components/logo/UseLogo"
import './NutShell.css'


export const GridLayout = () => {
  
    return (
        <Grid className="container">
            <Grid.Row rows={1}>
                <GridColumn>
                    <UseLogo />
                    <HeaderWelcome />
                </GridColumn>
            </Grid.Row>
            <Grid.Row columns={3} className="row1">
            <Grid.Column className="row1-column1">
                <p>
                Chase fathom topgallant chandler tender cable take a caulk Spanish Main American Main scurvy.
                Jack Tar jury mast chandler Privateer grog blossom sloop topmast parley doubloon fire ship. 
                List driver lugsail interloper hornswaggle crow's nest pressgang lanyard jib squiffy.
                Clipper black jack bowsprit grog blossom pink bilge water bilge rat Jack Tar fire in the hole bilged on her anchor. 
                Schooner heave to grog clipper barque Shiver me timbers gangplank Brethren of the Coast cog no prey, no pay. 
                Lookout rope's end lanyard dance the hempen jig crow's nest parley Buccaneer Nelsons folly tack chase.
                </p>
            </Grid.Column >
            <Grid.Column className="row1-column2">
                <p>
                Chase fathom topgallant chandler tender cable take a caulk Spanish Main American Main scurvy.
                Jack Tar jury mast chandler Privateer grog blossom sloop topmast parley doubloon fire ship. 
                List driver lugsail interloper hornswaggle crow's nest pressgang lanyard jib squiffy.
                Clipper black jack bowsprit grog blossom pink bilge water bilge rat Jack Tar fire in the hole bilged on her anchor. 
                Schooner heave to grog clipper barque Shiver me timbers gangplank Brethren of the Coast cog no prey, no pay. 
                Lookout rope's end lanyard dance the hempen jig crow's nest parley Buccaneer Nelsons folly tack chase.
                </p>
            </Grid.Column>
            <Grid.Column className="row1-column3">
                <p>
                Chase fathom topgallant chandler tender cable take a caulk Spanish Main American Main scurvy.
                Jack Tar jury mast chandler Privateer grog blossom sloop topmast parley doubloon fire ship. 
                List driver lugsail interloper hornswaggle crow's nest pressgang lanyard jib squiffy.
                Clipper black jack bowsprit grog blossom pink bilge water bilge rat Jack Tar fire in the hole bilged on her anchor. 
                Schooner heave to grog clipper barque Shiver me timbers gangplank Brethren of the Coast cog no prey, no pay. 
                Lookout rope's end lanyard dance the hempen jig crow's nest parley Buccaneer Nelsons folly tack chase.
                </p>
            </Grid.Column>
            </Grid.Row>
    
            <Grid.Row columns={2} className="row2">
            <Grid.Column className="row2-column1">
                <PostProvider>
                    <PostList/>
                </PostProvider>
            </Grid.Column>
            <Grid.Column className="row2-column2">
                <p>
                Chase fathom topgallant chandler tender cable take a caulk Spanish Main American Main scurvy.
                Jack Tar jury mast chandler Privateer grog blossom sloop topmast parley doubloon fire ship. 
                List driver lugsail interloper hornswaggle crow's nest pressgang lanyard jib squiffy.
                Clipper black jack bowsprit grog blossom pink bilge water bilge rat Jack Tar fire in the hole bilged on her anchor. 
                Schooner heave to grog clipper barque Shiver me timbers gangplank Brethren of the Coast cog no prey, no pay. 
                Lookout rope's end lanyard dance the hempen jig crow's nest parley Buccaneer Nelsons folly tack chase.
                </p>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

