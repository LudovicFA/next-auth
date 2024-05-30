"use client"
import { useCurrentUser } from "@/hooks/use-current-user"

const SettingsPage = () => {

    const user = useCurrentUser();

  return (
    <div className="bg-white p-10 rounded-xl">
          <button type="submit">
            Sign Out
          </button>

    </div>
  )
}

export default SettingsPage