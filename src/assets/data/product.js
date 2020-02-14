import {SAMPLE_AVATAR, SAMPLE_DRESS, SAMPLE_SHOP_LOGO} from '../images';

export default {
  title: 'Dress',
  shop_logo: SAMPLE_SHOP_LOGO,
  image: SAMPLE_DRESS,
  old_price: 59.39,
  price: 59.39,
  isLiked: true,
  rating: 3,
  rating_base: 4,
  available_sizes: [20, 21, 22, 23, 24],
  available_colors: ['#aaffe2', '#0072ff', '#e800ff', '#ff0069', '#141414'],
  comments: [
    {
      rating: 3,
      rating_base: 4,
      user_name: 'Moe',
      user_avatar: SAMPLE_AVATAR,
      comment:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
    },
    {
      rating: 3,
      rating_base: 4,
      user_name: 'Moe',
      user_avatar: SAMPLE_AVATAR,
      comment:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
    },
    {
      rating: 3,
      rating_base: 4,
      user_name: 'Moe',
      user_avatar: SAMPLE_AVATAR,
      comment:
        'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
    },
  ],
  description:
    "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
};
