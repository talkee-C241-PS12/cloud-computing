## Create by: OurCulture Team - Cloud Computing Team
## Team ID: CH2-PS310

This RESTful APIs created using Node.js, Express and Sequelize, ...

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/OurCultureBangkit/ourculture-be.git
cd ourculture-be
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env
# open .env and modify the environment variables
```

Set the connection variables:

```bash
cd config
cp config.json.example config.json
# open config.json and modify the variables
```

Generate JWT RS256 key:

```bash
openssl rand -base64 60 
# copy the result and paste to SECRET_KEY in .env
```

## Table of Contents

- [Commands](#commands)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

## Commands

Running in development:

```bash
npm start
```

Running in production:

```bash
# build
npm start
```


## Environment Variables

The environment variables can be found and modified in the `.env` file.

```bash
CLIENT_ID="Client id goes here"

FIRESTOREID="firestore database id goes here"

BUCKET="bucket name goes here"

MLURL="model url goes here"

PORT="port goes here"

IP="ip address goes here"

```

## Project Structure

```
- BANGKIT (root directory)
--src (source code directory)
---controller (directory containing controller files)
----*.js files (controller files for different functionalities like getgamecontroller.js, ---getgamedetailcontroller.js etc.)
---database (directory containing database related files)
----*.js files (database files like bucket.js, firebase.js)
---middleware (directory containing middleware files)
----auth.js (middleware file)
---model (directory containing model files)
----*.js files (model files for different functionalities like getcurrentjawabanmodel.js, getgamedetailmodel.js etc.)
---route (directory containing route files)
----route.js (route file)
--main.js (main file)
```

### API Endpoints

List of available routes:

api/profile?token={token}
api/register
api/riwayat/game?token={token}
api/riwayat/game/detail?idriwayat={idriwayat}&token={token}
api/kelas
api/kelas/detail?idkelas={idkelas}
api/game
api/game/detail?idgame={idgame}
api/game/start
api/game/answer
api/profile
api/leaderboard

## License

[MIT](LICENSE)