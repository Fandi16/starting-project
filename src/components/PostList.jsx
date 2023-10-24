import Post from "./post";
import classes from "../components/PostsList.module.css"

function PostList ()
{
    return (
        <ul className={classes.posts}>
            <Post author="bejo" body="belajar react tidak sulit"/>
            <Post author="banget" body="belajar di UPGRIS sangat Awsome !!!!"/>
            <Post author="fandi" body="belajar reac gampang banget"/>
            <Post author="bejo" body="belajar react tidak sulit"/>
            <Post author="banget" body="belajar di UPGRIS sangat Awsome !!!!"/>
            <Post author="fandi" body="belajar reac gampang banget"/>
            <Post author="bejo" body="belajar react tidak sulit"/>
            <Post author="banget" body="belajar di UPGRIS sangat Awsome !!!!"/>
            <Post author="fandi" body="belajar reac gampang banget"/>
            <Post author="bejo" body="belajar react tidak sulit"/>
            <Post author="banget" body="belajar di UPGRIS sangat Awsome !!!!"/>
            <Post author="fandi" body="belajar reac gampang banget"/>
        </ul>
    )
}

export default PostList