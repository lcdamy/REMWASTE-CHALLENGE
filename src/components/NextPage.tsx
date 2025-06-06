const NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">Where will the skip be placed?</h1>
      <p className="text-lg dark:text-gray-400 text-stone-700 mb-8">This helps us determine if you need a permit for your skip</p>
      <a
        href="/"
        className="px-6 py-2 rounded-full font-medium bg-blue-500 text-white border border-blue-500 shadow-md transition-colors duration-200 hover:bg-white hover:text-blue-400 dark:bg-cyan-200 dark:text-gray-800 dark:border-cyan-200 dark:hover:bg-transparent dark:hover:text-cyan-200 focus:outline-none focus:ring-blue-400 mb-4 w-full max-w-xs text-center"
      >
        Go Back to Previous
      </a>

    </div>
  )
}
export default NextPage;