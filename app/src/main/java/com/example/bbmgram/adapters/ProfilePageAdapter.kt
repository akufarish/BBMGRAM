package com.example.bbmgram.adapters

import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentManager
import androidx.lifecycle.Lifecycle
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.example.bbmgram.pages.profile.PostsFragment
import com.example.bbmgram.pages.profile.ReelsFragment
import com.example.bbmgram.pages.profile.TagFragment

class ProfilePageAdapter(
    private val fragmentManager: FragmentManager,
    private val lifecycle: Lifecycle
) : FragmentStateAdapter(fragmentManager, lifecycle) {
    override fun getItemCount(): Int {
        return 3
    }

    override fun createFragment(position: Int): Fragment {
        val fragment = when (position) {
            0 -> PostsFragment()
            1 -> ReelsFragment()
            2 -> TagFragment()
            else -> {
                PostsFragment()
            }
        }

        return fragment
    }
}