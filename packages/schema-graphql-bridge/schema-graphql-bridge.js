gqlType = {};
gqlType[String] = 'String';
gqlType[Number] = 'Float';
gqlType[Boolean] = 'Boolean';
gqlType[Date] = 'Date';

defaultMocks = {
  String: () => 'It works!',
  Int: () => 6,
  Float: () => 6.2,
  Boolean: () => true,
  Date: () => new Date
}

getSchema = (schema, { fields, name, except }={}) => {
  const S = schema._schema;
  let keys = getFields({schema, fields, except});
  let content = keys.map(k => {
    if(S[k].type == Object)
      return ``;
    else if(S[k].type == Array && S[`${k}.$`])
      return `
      ${k}: [${gqlType[S[`${k}.$`].type]}]
    `;

    return `
      ${k}: ${gqlType[S[k].type]}
    `;
  });
  content = content.reduce((a,b) => `${a}${b}`);

  if(!name)
    return content;

  return `
    type ${name} {
      ${content}
    }
  `;
};

getResolvers = (schema, { fields, name, except } = {}) => {
  const S = schema._schema;
  let keys = getFields({schema, fields, except});
  let res = {};
  keys.forEach(k => {
    res[k] = function(root, args, context) {
      return root[k];
    };
  });
  if(!name)
    return res;
  
  let n = {};
  n[name] = res;
  return n;
};

getMocks = (schema, { fields, name, except } = {}) => {
  const S = schema._schema;
  let keys = getFields({schema, fields, except}),
    mocks = {};
  keys.forEach(k => {
    if(gqlType[S[k].type])
      mocks[gqlType[S[k].type]] = defaultMocks[gqlType[S[k].type]];
  })

  if(name)
    mocks[name] = () => {
      let obj = {};
      keys.forEach(k => {
        if(gqlType[S[k].type])
          obj[k] = defaultMocks[gqlType[S[k].type]];
      })
      return obj;
    }

  return mocks;
};

const SchemaBridge = {
  schema: getSchema,
  resolvers: getResolvers,
  mocks: getMocks
};

const getFields = ({schema, fields, except=[]}) => {
  const S = schema._schema;
  let keys, kk = [];
  if(fields && fields.length)
    keys = fields.filter(k => schema._firstLevelSchemaKeys.indexOf(k) > -1);
  else
    keys = schema._firstLevelSchemaKeys;

  keys.forEach(k => {
    if(except.indexOf(k) == -1 && S[k].type != Date && S[k].type != Object)
      kk.push(k);
  });
  return kk;
};


export default SchemaBridge;
