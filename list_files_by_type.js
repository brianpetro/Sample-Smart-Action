/**
 * @openapi
 * /list-files-by-type:
 *   get:
 *     operationId: list_files_by_type
 *     description: List files by type
 *     parameters:
 *       - name: type
 *         in: query
 *         description: The type of file to list
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of files
 */
function list_files_by_type(env, params) {
  return env.fs.file_paths.filter(f => f.endsWith(params.type));
}
exports.list_files_by_type = list_files_by_type;
