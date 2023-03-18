import "https://deno.land/x/markdown@v2.0.0/mod.ts"
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req: Request): Response {
  return new Response("Hello, World");
}

serve(handler);
