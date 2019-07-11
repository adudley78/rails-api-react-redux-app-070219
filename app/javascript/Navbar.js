import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Navbar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>

                <Menu.Item
                    name='welcome'
                    href='/welcome'
                    active={activeItem === 'welcome'}
                    onClick={this.handleItemClick}
                >
                    welcome
                </Menu.Item>

                <Menu.Item
                    name='new'
                    active={activeItem === 'new'}
                    onClick={this.handleItemClick}
                    >
                    new
                </Menu.Item>

                <Menu.Item
                    name='threads'
                    active={activeItem === 'threads'}
                    onClick={this.handleItemClick}
                    >
                    threads
                </Menu.Item>

                {/* <Menu.Item
                    name='past'
                    active={activeItem === 'past'}
                    onClick={this.handleItemClick}
                >
                    past
                </Menu.Item> */}
                
                <Menu.Item
                    name='comments'
                    active={activeItem === 'comments'}
                    onClick={this.handleItemClick}
                >
                    comments
                </Menu.Item>
                
                {/* <Menu.Item
                    name='ask'
                    active={activeItem === 'ask'}
                    onClick={this.handleItemClick}
                >
                    ask
                </Menu.Item>
                
                <Menu.Item
                    name='show'
                    active={activeItem === 'show'}
                    onClick={this.handleItemClick}
                >
                    show
                </Menu.Item> */}

                <Menu.Item
                    name='club'
                    active={activeItem === 'club'}
                    onClick={this.handleItemClick}
                >
                    club
                </Menu.Item>
                
                <Menu.Item
                    name='submit'
                    href='/submit'
                    active={activeItem === 'submit'}
                    onClick={this.handleItemClick}
                >
                    submit
                </Menu.Item>
                
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='login'
                        href='#'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    >
                        login
                    </Menu.Item>
                </Menu.Menu>

            </Menu>
        )
    }
}

export default Navbar