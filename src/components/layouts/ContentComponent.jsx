import React from 'react'
import { Breadcrumb, Layout, Menu, theme, Button, Drawer } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Outlet } from 'react-router-dom'

function ContentComponent() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Content
                style={{
                    margin: '0 16px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        textAlign: 'justify'
                    }}
                >
                    <Outlet/>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed rutrum mauris vel augue ultrices, sed luctus sapien ornare.
                        Pellentesque lacinia magna nec magna luctus, vitae faucibus arcu ultricies.
                        Nulla non neque euismod, sollicitudin nibh eget, ultricies orci.
                        Donec mollis odio sed purus vulputate vulputate.
                        Ut mattis urna id nibh consectetur efficitur.
                        Praesent vel turpis elementum, mollis urna id, consequat arcu.
                        Quisque posuere leo sodales enim rhoncus auctor.
                        Mauris interdum nulla vitae elit aliquet pretium.
                        Etiam eget ipsum efficitur, hendrerit neque et, molestie orci.
                        Integer sit amet nunc at metus interdum imperdiet.
                        Sed pretium leo sit amet massa hendrerit, eget auctor diam tincidunt.
                        Duis quis enim gravida, sagittis risus eget, efficitur erat.
                        Phasellus porta elit et augue aliquet euismod.
                        Donec finibus elit quis arcu faucibus, id rhoncus felis ullamcorper.
                        Vivamus sit amet nulla non tellus luctus finibus.
                        Duis rutrum neque molestie erat blandit fringilla.
                        In ac libero at nulla dapibus auctor.
                        Etiam eleifend tortor ac ligula placerat molestie.
                        Etiam elementum magna sit amet massa dictum, sed malesuada ex blandit.
                        Donec pellentesque neque eu ultricies condimentum.
                        Sed sollicitudin metus sit amet turpis tempor finibus.
                        Aliquam blandit diam sit amet magna mollis, ut placerat mauris posuere.
                        Donec in diam sed mauris mollis viverra id in sapien.
                        Proin ultricies augue et turpis consectetur iaculis.
                        Vestibulum pharetra eros vel neque feugiat aliquet.
                        Nullam aliquam lorem in dui tristique dapibus.
                        Donec sed turpis aliquet, condimentum arcu sed, condimentum dui.
                        Quisque quis nunc euismod, posuere massa id, elementum dolor.
                        Praesent at nisi pellentesque, faucibus nulla non, euismod sapien.
                        Maecenas faucibus lorem bibendum, maximus lorem vitae, elementum dui.
                        Aenean hendrerit orci in urna lacinia gravida.
                        Mauris sagittis neque eu orci tempor malesuada.
                        Mauris non odio eu erat vestibulum faucibus.
                        Sed sollicitudin metus a pulvinar laoreet.
                        Cras sit amet tellus sit amet magna pretium mollis vel in lacus.
                        In sit amet elit at lacus dapibus dictum ac nec est.
                        In sit amet diam ultrices, placerat neque vitae, suscipit ex.
                        Mauris fringilla orci ut sem sodales sodales ut at lorem.
                        Nam et quam ut libero lacinia porttitor.
                        Nunc nec enim ut est fringilla varius sit amet id mauris.
                        Suspendisse ullamcorper velit sit amet justo facilisis, non suscipit augue luctus.
                        Nullam tempus justo id ex pretium ornare.
                        Vestibulum eget massa mollis, varius tellus porttitor, varius erat.
                        Nulla feugiat enim ultrices magna pretium facilisis.
                        Morbi eget neque sit amet ex dictum placerat eget et purus.
                        Nulla mattis nisl vel nisi semper pulvinar.
                        In eu libero vitae nulla faucibus sagittis et nec nisl.
                        Nullam aliquet massa vitae ipsum placerat maximus.
                        Aenean cursus quam ut felis consectetur sollicitudin.
                        Vestibulum convallis sem bibendum, aliquam urna nec, maximus erat.
                        Vivamus in risus at libero pretium imperdiet.
                        Etiam imperdiet ligula eget condimentum placerat.
                        Nam mollis nisl at lacus ultricies, eu tempus nulla congue.
                        Nullam ac nibh nec dolor porta cursus.
                        Praesent vulputate eros in cursus luctus.
                        Pellentesque nec est hendrerit, viverra tellus sed, suscipit enim.
                        Fusce vehicula ante id aliquet rutrum.
                        Vivamus rutrum ante malesuada lacus dapibus dapibus.
                        Sed sit amet nulla a massa bibendum mollis eu porttitor ex.
                        Praesent et ligula vel sapien rhoncus accumsan nec non lorem.
                        Duis ac lectus ultrices est efficitur lobortis sit amet eget urna.
                        Vestibulum feugiat diam eget massa condimentum condimentum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed rutrum mauris vel augue ultrices, sed luctus sapien ornare.
                        Pellentesque lacinia magna nec magna luctus, vitae faucibus arcu ultricies.
                        Nulla non neque euismod, sollicitudin nibh eget, ultricies orci.
                        Donec mollis odio sed purus vulputate vulputate.
                        Ut mattis urna id nibh consectetur efficitur.
                        Praesent vel turpis elementum, mollis urna id, consequat arcu.
                        Quisque posuere leo sodales enim rhoncus auctor.
                        Mauris interdum nulla vitae elit aliquet pretium.
                        Etiam eget ipsum efficitur, hendrerit neque et, molestie orci.
                        Integer sit amet nunc at metus interdum imperdiet.
                        Sed pretium leo sit amet massa hendrerit, eget auctor diam tincidunt.
                        Duis quis enim gravida, sagittis risus eget, efficitur erat.
                        Phasellus porta elit et augue aliquet euismod.
                        Donec finibus elit quis arcu faucibus, id rhoncus felis ullamcorper.
                        Vivamus sit amet nulla non tellus luctus finibus.
                        Duis rutrum neque molestie erat blandit fringilla.
                        In ac libero at nulla dapibus auctor.
                        Etiam eleifend tortor ac ligula placerat molestie.
                        Etiam elementum magna sit amet massa dictum, sed malesuada ex blandit.
                        Donec pellentesque neque eu ultricies condimentum.
                        Sed sollicitudin metus sit amet turpis tempor finibus.
                        Aliquam blandit diam sit amet magna mollis, ut placerat mauris posuere.
                        Donec in diam sed mauris mollis viverra id in sapien.
                        Proin ultricies augue et turpis consectetur iaculis.
                        Vestibulum pharetra eros vel neque feugiat aliquet.
                        Nullam aliquam lorem in dui tristique dapibus.
                        Donec sed turpis aliquet, condimentum arcu sed, condimentum dui.
                        Quisque quis nunc euismod, posuere massa id, elementum dolor.
                        Praesent at nisi pellentesque, faucibus nulla non, euismod sapien.
                        Maecenas faucibus lorem bibendum, maximus lorem vitae, elementum dui.
                        Aenean hendrerit orci in urna lacinia gravida.
                        Mauris sagittis neque eu orci tempor malesuada.
                        Mauris non odio eu erat vestibulum faucibus.
                        Sed sollicitudin metus a pulvinar laoreet.
                        Cras sit amet tellus sit amet magna pretium mollis vel in lacus.
                        In sit amet elit at lacus dapibus dictum ac nec est.
                        In sit amet diam ultrices, placerat neque vitae, suscipit ex.
                        Mauris fringilla orci ut sem sodales sodales ut at lorem.
                        Nam et quam ut libero lacinia porttitor.
                        Nunc nec enim ut est fringilla varius sit amet id mauris.
                        Suspendisse ullamcorper velit sit amet justo facilisis, non suscipit augue luctus.
                        Nullam tempus justo id ex pretium ornare.
                        Vestibulum eget massa mollis, varius tellus porttitor, varius erat.
                        Nulla feugiat enim ultrices magna pretium facilisis.
                        Morbi eget neque sit amet ex dictum placerat eget et purus.
                        Nulla mattis nisl vel nisi semper pulvinar.
                        In eu libero vitae nulla faucibus sagittis et nec nisl.
                        Nullam aliquet massa vitae ipsum placerat maximus.
                        Aenean cursus quam ut felis consectetur sollicitudin.
                        Vestibulum convallis sem bibendum, aliquam urna nec, maximus erat.
                        Vivamus in risus at libero pretium imperdiet.
                        Etiam imperdiet ligula eget condimentum placerat.
                        Nam mollis nisl at lacus ultricies, eu tempus nulla congue.
                        Nullam ac nibh nec dolor porta cursus.
                        Praesent vulputate eros in cursus luctus.
                        Pellentesque nec est hendrerit, viverra tellus sed, suscipit enim.
                        Fusce vehicula ante id aliquet rutrum.
                        Vivamus rutrum ante malesuada lacus dapibus dapibus.
                        Sed sit amet nulla a massa bibendum mollis eu porttitor ex.
                        Praesent et ligula vel sapien rhoncus accumsan nec non lorem.
                        Duis ac lectus ultrices est efficitur lobortis sit amet eget urna.
                        Vestibulum feugiat diam eget massa condimentum condimentum.

                    </p> */}
                </div>
            </Content>
        </>
    )
}

export default ContentComponent