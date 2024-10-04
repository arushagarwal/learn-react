// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Profile_Mistake from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import Bio from './qcomps/bios'
import Profile_Props from './components/profile_props'
import Gallery from './qcomps/gallery_props'
import PackingList from './components/props_item'
import List_Keys_Id from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import GalleryState from './qcomps/state'
import Form from './components/updObjects'
import UserForm from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/snapshot'

export default function Home() {
  return (
    <div>
    <Profile />
    <Profile_Mistake />
    <MyComp />
    <Bio />
    <Profile_Props />
    <Gallery />
    <PackingList />
    <List_Keys_Id />
    <RecipeList />
    <GalleryState />
    <hr />
    <Form />
    <hr />
    <UserForm />
    <hr />
    <FeedbackForm />
    <br />
    <Counter />
    </div>

  )
}
