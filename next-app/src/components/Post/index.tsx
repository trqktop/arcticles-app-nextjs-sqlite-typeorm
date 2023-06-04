import {
  FavoriteOutlined,
  MoreVertOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import {
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Tooltip } from '@mui/joy';
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSession } from "next-auth/react";
import CrudForm from "../CrudForm";
import { PostContext } from "@/pages";






const Post = ({ data }: any) => {
  const { deletePostHandler } = useContext(PostContext)

  const deleteHandler = async () => {
    // try {
    //   const result = await fetch(`http://localhost:3000/api/post/${data.id}`, {
    //     method: "DELETE",
    //   })
    //   console.log(result)
    // } catch (error) {
    //   console.log(error)
    // }
    deletePostHandler(data.id)
  };

  const ButtonGroup = () => {
    const session = useSession()
    if (session?.data?.user?.role === '1') {
      return (
        <React.Fragment>
          <Tooltip title='delete post'>
            <IconButton color="primary" onClick={deleteHandler}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {/* <IconButton color="primary"> */}
          <CrudForm icon={<EditIcon />} type="update" data={data} />
          {/* </IconButton> */}
        </React.Fragment>
      )
    }
    return null
  }

  return (
    <Card>
      <CardHeader
        action={
          <CardActions disableSpacing>
            <ButtonGroup />
          </CardActions>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography paragraph>
          {data.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
