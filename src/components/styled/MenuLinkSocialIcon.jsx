import { useTheme } from '@mui/material';

export default function MenuLinkSocialIcon({
  href,
  src,
  alt,
  width,
  height,
  css,
}) {
  const theme = useTheme();
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      css={{
        paddingTop: '8px',
        paddingBottom: '1px',
        '&:hover': {
          borderBottom: 'solid 1px #EF915B',
          paddingTop: '8px',
          paddingBottom: '0px',
        },
        ...css,
      }}
    >
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
}
