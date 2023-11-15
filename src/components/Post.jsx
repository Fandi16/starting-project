import classes from './Post.module.css'

function Post ({author, body})
{
    return (
        <div className={classes.Post}>
            <p className={classes.author}>{ author }</p>
            <p className={classes.text}>{ body}</p>
        </div>
    )
}

export default Post;