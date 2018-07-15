import app from './app';

const server = app.listen(app.get('port'), () => {
  console.log(
    'Server is running on http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
});

export default server;