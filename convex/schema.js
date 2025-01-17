import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  pdfFiles: defineTable({
    createdBy: v.string(),
    fileId: v.string(),
    fileName: v.string(),
    fileUrl: v.string(),
    storageId: v.id("_storage"),
  }),
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    userName: v.string(),
    upgrade:v.boolean()
  }),
  
  documents: defineTable({
    embedding: v.array(v.number()),
    text: v.string(),
    metadata: v.any(),
  }).vectorIndex("byEmbedding", {
    vectorField: "embedding",
    dimensions: 768,
  }),

  notes:defineTable({
    fileId:v.string(),
    notes:v.any(),
    createdBy:v.string()
  })

});
