import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core'
import Header from './Header';
import SideBar from './SideBar';

const drawerWidth = 240;
const useStyles = makeStyles( theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const Contenedor = () => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleOpen = () =>{
    setOpen(!open);
  }

  return (
    <div className={classes.root}>

      <Header open={open} toggleOpen={toggleOpen}/> 

      <SideBar 
        variant='persistent' 
        open={open}
        toggleOpen={toggleOpen}
      />

      <div className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.toolbar}></div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maxime eius quidem ut soluta ipsum. Nihil quas necessitatibus amet, at est, nostrum quaerat neque numquam aliquam molestias adipisci sapiente eos?
        Quidem accusamus placeat repudiandae? Laudantium itaque saepe nobis recusandae nulla sequi expedita non nihil ad soluta voluptatum quaerat vel quasi dolore consectetur culpa debitis maiores quisquam eligendi, odit quia. Amet!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta, voluptate consectetur impedit tempore ullam vel perspiciatis ipsum itaque, aliquam molestiae. Sapiente, harum neque. Totam ad excepturi accusamus numquam voluptatum?
        Nostrum id enim vitae nihil assumenda unde saepe laboriosam, nam fuga velit incidunt molestiae debitis illo, blanditiis culpa ex? Dolorum voluptatibus corrupti quas, veritatis sunt blanditiis repudiandae facilis culpa libero.
        Dolores, reprehenderit? Nihil provident ad ducimus reiciendis. Ratione, repellat atque? Necessitatibus omnis atque aspernatur nihil, fugit delectus natus ratione fuga. Culpa distinctio numquam sapiente, fugit suscipit aut nisi nostrum doloremque!
        Impedit facere unde fugit voluptas nobis a consectetur ullam eveniet ex. Architecto, dolor eum laborum explicabo, mollitia nihil quo aut reprehenderit beatae consequuntur nostrum possimus magni saepe doloribus sapiente vel!
        Error quod cupiditate nesciunt amet dolores, natus sapiente magni tenetur maiores! Sapiente, maiores necessitatibus. Doloribus alias, commodi quisquam sapiente dolor fugit, voluptates vitae enim explicabo itaque esse dolorem, porro recusandae?
        Dolor magnam quae cumque quod quas asperiores consectetur eaque soluta numquam! Voluptatum minus repellat hic nam eligendi earum labore sapiente doloremque! Ducimus corporis quis ratione deleniti expedita facilis, commodi animi!
        At saepe neque, est officiis, dignissimos, voluptate nostrum illum dolore iusto tenetur obcaecati? Culpa maxime cupiditate nesciunt nobis dolores labore architecto, quae officiis doloremque aperiam similique voluptates et accusantium consequatur.
        Voluptates reprehenderit ratione amet eligendi facere quaerat, provident aut ea consectetur, est fugiat quia? Aspernatur totam similique ratione voluptas aliquid, nulla sequi maxime, sed quisquam animi blanditiis in, numquam quis.
        Aut libero nihil odio fugit molestiae nesciunt maiores, accusamus facilis ducimus. Aperiam consequuntur fugiat voluptas quos dolore vel quisquam vero! Accusantium nostrum est pariatur, aut autem id? Odio, magnam dolore.
        Dicta aut quisquam nostrum fuga et consequuntur suscipit quod eaque minima, qui deserunt perspiciatis incidunt velit illum earum nihil nisi reiciendis aliquid iste explicabo laborum repellendus molestiae, laudantium illo! Officia.
        Aperiam perferendis quibusdam explicabo quisquam dignissimos eveniet iste esse repellendus illum impedit voluptatibus eos molestiae, maiores, velit nulla quia voluptatem. Quo incidunt non laborum in voluptatum aspernatur aliquid alias sapiente.
        Accusamus error, officia animi consequatur asperiores repellat dolores est laudantium rerum corporis recusandae omnis fuga soluta natus nam laboriosam suscipit, optio quaerat, laborum minima. Rerum odit rem ipsum eveniet vero?
        Nobis dolor excepturi similique, alias culpa suscipit non ex officiis ut provident modi ratione et voluptate enim eos aperiam voluptates beatae velit autem nisi nulla explicabo id atque omnis? Maiores.
        Culpa harum sunt quia repudiandae reiciendis nihil enim voluptas magnam iure! Ea aperiam, animi fuga dolores optio, possimus molestias, omnis at quis qui eligendi delectus voluptas! At ipsam nulla explicabo.
        Sint, facere officia. Ullam repellat esse cum hic odit ab earum voluptatum, ducimus ratione maxime dolore, expedita dolorum vitae maiores saepe reprehenderit vero! Ratione ipsa officia similique aliquid omnis quisquam.
        Ipsa similique accusantium explicabo doloribus magni iusto, illo dolores nisi dicta distinctio quod enim iste nulla eius dolorem iure numquam? Modi aperiam totam asperiores ratione ut voluptatum. Laborum, eius id.
        Possimus expedita corrupti eligendi modi debitis, magnam voluptatum, labore ex nulla, voluptatem impedit. Doloremque blanditiis est minus quasi numquam nesciunt harum incidunt. Iure architecto deserunt unde sapiente exercitationem optio aperiam?
        Voluptate doloremque pariatur cupiditate, ducimus aperiam dicta, perferendis eos, recusandae illo possimus autem. Explicabo dignissimos ullam inventore nulla obcaecati, similique culpa! Id, sed alias eligendi cum officia magni dicta recusandae.
        Iste delectus consequuntur iusto. Dolorum modi veritatis laboriosam ut in ipsum ex, ea minus obcaecati asperiores quaerat id dolores delectus voluptate ab maiores enim inventore recusandae. Veniam labore fugiat exercitationem!
        Minima eos voluptas quidem earum ratione quaerat rerum eveniet quibusdam nam? Commodi eum ratione similique debitis architecto vitae accusantium tempore in cupiditate, distinctio reprehenderit aliquid nulla magni quis provident doloribus.
      </div>
    </div>
  );
}

export default Contenedor;
