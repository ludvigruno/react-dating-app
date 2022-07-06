import local from './local';

type Environment = 'local';

const config: any = {
  local,
};

const environment: Environment =
  (process.env.REACT_APP_ENV as Environment) || 'local';

export default config[environment];
