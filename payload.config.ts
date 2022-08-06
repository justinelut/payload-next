import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Categories from './collections/Categories';
import Tags from './collections/Tags';
import Users from './collections/Users';
import Posts from './collections/Posts'


dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
    Categories,
    Tags,
    Posts,
    Users
  ],
});
