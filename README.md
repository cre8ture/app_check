Welcome to the NextJS base template bootstrapped using the `create-next-app`. This template supports TypeScript, but you can use normal JavaScript as well.

## Getting Started

Hit the run button to start the development server.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on `/api/hello`. This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Productionizing your Next App

To make your next App run smoothly in production make sure to [turn this repl to an always-on repl.](https://docs.replit.com/hosting/enabling-always-on)

You can also produce a production build by running `npm run build` and [changing the run command](https://docs.replit.com/programming-ide/configuring-repl#run) to `npm run start`.
<!-- 

const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const innerCircleStyle = {
    animation: 'spin 1s ease-in-out infinite',
    border: '6px solid rgba(0, 0, 0, 0.1)',
    borderTopColor: '#000',
    borderRadius: '50%',
    content: '',
    display: 'block',
    height: '50px',
    width: '50px',
  };

const cancelStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  paddingRight: '5px',
  paddingLeft: '5px',
  paddingBottom: '5px',
  border: '1px solid red',
  margin: '3px',
  color: 'red',
  width: '20px',
  height: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10%',
  fontSize: '16px',
  fontWeight: 'bold',
// add hover effect
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },

  // add ripple animation on click
  overflow: 'hidden',
  ':active': {
    ':after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 0, 0, 0.3)',
      animation: 'ripple 0.4s linear',
    },
  },
};

// add ripple animation keyframes
const keyframes = `
  @keyframes ripple {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }
`; -->