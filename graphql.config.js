const SCHEMA = "public/schema.graphql";

/** @type {import('graphql-config').IGraphQLConfig } */
const config = {
  projects: {
    api: {
      schema: SCHEMA,
      extensions: {
        codegen: {
          overwrite: true,
          generates: {
            "./lib/api/graphql/generated.ts": {
              plugins: ["typescript", "typescript-resolvers"],
            },
          },
          "./graphql.schema.json": {
            plugins: ["introspection"],
          },
        },
      },
    },
    app: {
      schema: SCHEMA,
      documents: "services/**/*.graphql",
      extensions: {
        codegen: {
          overwrite: true,
          watchConfig: {
            usePolling: true,
            interval: 1000,
          },
          generates: {
            "services/graphql/generated.ts": {
              plugins: ["typescript"],
            },
            ".": {
              preset: "near-operation-file",
              presetConfig: {
                baseTypesPath: "services/graphql/generated.ts",
              },
              plugins: [
                "typescript-operations",
                {
                  "typescript-rtk-query": {
                    importBaseApiFrom: "services/baseApi",
                    exportHooks: true,
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  extensions: {
    languageService: {
      cacheSchemaFileForLookup: false,
      enableValidation: true,
    },
  },
};

module.exports = config;
